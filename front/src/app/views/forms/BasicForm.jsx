import React, { Component } from 'react'
import SimpleForm from '../material-kit/forms/SimpleForm'
import { Card } from '@material-ui/core'

class BasicForm extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <SimpleForm />
                </Card>
            </div>
        )
    }
}

export default BasicForm
