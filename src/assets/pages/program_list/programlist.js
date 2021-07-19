import React from 'react'
import BarSlctr from '../../../components/bar_slctr/bar_slctr';
//import data from '../../../sample/programs.json';

class ProgramList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 0,
                    "title": "ZW HNQIS2 VMMC A&B",
                    "contains": 2,
                    "wrngs": {
                        "state": false,
                        "nbr": 3,
                        "message": [
                            {
                                "text1": "No form name set - the Long Name will be used",
                                "text2": "Feedback active, but not feedback text",
                                "text3": "Another low-importance violation..."
                            }
                        ]
                    },
                    "errors": [{
                        "state": false,
                        "nbr": 2,
                        "message": [
                            {
                                "text1": "Numerator set, but not Order set",
                                "text2": "Denominator not set (numerator is set)"
                            }
                        ]
                    }]
                },
                {
                    "id": 1,
                    "title": "ZW HNQIS2 VMMC C: Client Record Review",
                    "contains": 3
                },
                {
                    "id": 2,
                    "title": "ZW HNQIS2 VMMC D: Emergency Management",
                    "contains": 2
                },
                {
                    "id": 3,
                    "title": "ZW HNQIS2 VMMC DHE CQI TOOL",
                    "contains": 4
                },
                {
                    "id": 4,
                    "title": "ZW HNQIS2 VMMC E: Adequacy of Staffing",
                    "contains": 2
                },
                {
                    "id": 5,
                    "title": "ZW HNQIS2 VMMC F: Surgical Equipment and Procedures",
                    "contains": 2
                },
                {
                    "id": 6,
                    "title": "ZW HNQIS2 VMMC G: Communication to Clients",
                    "contains": 2
                }
            ]
        }
    }

    render() {
        
        return (
            this.state.prgms.map((prgm) => {
               {console.log('hola: '+prgm.contains)}
                return (
                    <BarSlctr
                        key={prgm.data.key}
                        title={prgm.data.title}
                        
                    />
                )
            })
     );
    }
}

export default ProgramList