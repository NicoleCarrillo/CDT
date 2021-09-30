import React, { useState } from 'react'
import {
    TextField,
    Icon,
    StepLabel,
    Step,
    Stepper,
    Grid,
} from '@material-ui/core'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const getSteps = () => {
    return ['Inicializado', 'En Proceso','Analizando Evidencias', 'Sopechosos','Finalizado']
}

function getStepContent(stepIndex, value) {
    switch (stepIndex) {
        case 0:
            return (
                <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Nombre Funcionario" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Apellido Funcionario" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField className="w-full" label="Placa Funcionario" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography component="legend" style ={ {fontSize:12}}>Raiting Funcionario</Typography>
                            <Rating name="read-only" value={value} readOnly />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                style ={ {fontSize:12, minWidth: 1050, maxHeight: 100}}
                                id="filled-multiline-static"
                                variant="filled"
                                label="Descripción Status"
                                multiline
                                rows={3}
                                inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                            />
                        </Grid>
                    </Grid>
                </form>
            )
        default:
            console.log("hey")
        }
}

export default function HorizontalStepper() {
    // const [activeStep, setActiveStep] = useState(0)
    // const [value, setValue] = useState(2)
    const [activeStep] = useState(0)
    const [value] = useState(2)
    const steps = getSteps()

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1)
    // }

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1)
    // }

    // const handleReset = () => {
    //     setActiveStep(0)
    // }

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <div className="flex items-center mb-4">
                            <Icon>done</Icon> <span className="ml-2">Done</span>
                        </div>
                        {/* <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button> */}
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep, value)}
                        <div className="pt-6">
                            {/* <Button
                                variant="contained"
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button
                                className="ml-4"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
