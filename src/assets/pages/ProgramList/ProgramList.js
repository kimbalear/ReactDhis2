import React from 'react'
import BarSlctr from '../../../components/BarSlctr/BarSlctr';
import SubNav from '../../../components/SubNav/SubNav';

class ProgramList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 0,
                    "title": "ZW HNQIS2 VMMC A&B",
                    "contains": 2
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
            <div className="Container">
                <SubNav
                    path="DHIS2 Config wizard"
                />
                {this.state.data.map((exercise) => {
                    return (
                        <BarSlctr
                            key={exercise.key}
                            title={exercise.title}
                            contains={exercise.contains} />
                    )
                })}
            </div>

        );
    }
}

export default ProgramList