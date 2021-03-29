import React, { Component } from 'react'


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: props.rows,
        };

        this.addRow = this.addRow.bind(this);
    }

    addRow() {
        const rows = this.state.rows.slice();
        rows.push('new row');
        this.setState({ rows: rows })
    }

    render() {
        return (
            <>
                <button className='addBtn' onClick={this.addRow}>New issue</button>
                <div className='issues_div'>
                    <table className='issues'>
                        {this.state.rows.map((r) => (
                            <tr>
                                <td>{r}</td>
                            </tr>
                        ))}
                    </table>
                </div>

            </>
        )
    }
}
