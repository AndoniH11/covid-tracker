import React from 'react';
import {fetchDailyData} from '../api/api'
import {Line, Bar } from 'react-chartjs-2';

class Chart extends React.Component{

    state= {
        dailyData: []
    }

    async componentDidMount(){
        const fetchAPI = await fetchDailyData();
        console.log(fetchAPI)
        this.setState({
            dailyData: fetchAPI
        })
    }

    render(){
        const {dailyData} = this.state
        const {data: {confirmed, recovered, deaths}, country} = this.props

        const barChart = (
            confirmed ? (
                <Bar   
                    data={{
                        labels: ['Contagiados', 'Recuperados', 'Muertes'],
                        datasets:[{
                            label: 'Personas',
                            backgroundColor: [
                                ' rgb(22, 22, 190)',
                                'rgb(49, 153, 49)',
                                'rgb(209, 53, 53)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend:{display: false},
                        title: {display: true, text: `Estado actual en ${country}`}
                    }}
                />
            ) :
            null
        )

        return(
            <div className='grafico-container'>
               {barChart}
            </div>


        )
    }
}

export default Chart