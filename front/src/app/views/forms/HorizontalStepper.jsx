// import React, { useState } from 'react'
// import {
//     TextField,
//     Icon,
//     StepLabel,
//     Step,
//     Stepper,
//     Grid,
// } from '@material-ui/core'
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// const getSteps = () => {
//     return ['Inicializado', 'En Proceso','Analizando Evidencias', 'Sopechosos','Finalizado']
// }

// const [activeStep] = null
// const [value] = null
// const steps = getSteps()
//    // const [activeStep, setActiveStep] = useState(0)
//     // const [value, setValue] = useState(2)

//     // const handleNext = () => {
//     //     setActiveStep((prevActiveStep) => prevActiveStep + 1)
//     // }

//     // const handleBack = () => {
//     //     setActiveStep((prevActiveStep) => prevActiveStep - 1)
//     // }

//     // const handleReset = () => {
//     //     setActiveStep(0)
//     // }

// // function getStepContent(stepIndex, value, data, data2,data3) {
// //     switch (stepIndex) {
// //         case 0:
// //             return (
// //                 <form noValidate autoComplete="off">
// //                     <Grid container spacing={3}>
// //                         <Grid item lg={6} md={6} sm={12} xs={12}>
// //                             <TextField className="w-full" label="Nombre Funcionario" value={data.crimeDesc}/>
// //                         </Grid>
// //                         <Grid item lg={6} md={6} sm={12} xs={12}>
// //                             <TextField className="w-full" label="Apellido Funcionario" />
// //                         </Grid>
// //                         <Grid item lg={6} md={6} sm={12} xs={12}>
// //                             <TextField className="w-full" label="Placa Funcionario" />
// //                         </Grid>
// //                         <Grid item lg={6} md={6} sm={12} xs={12}>
// //                             <Typography component="legend" style ={ {fontSize:12}}>Raiting Funcionario</Typography>
// //                             <Rating name="read-only" value={value} readOnly />
// //                         </Grid>
// //                         <Grid item lg={12} md={12} sm={12} xs={12}>
// //                             <TextField
// //                                 style ={ {fontSize:12, minWidth: 1050, maxHeight: 100}}
// //                                 id="filled-multiline-static"
// //                                 variant="filled"
// //                                 label="Descripción Status"
// //                                 multiline
// //                                 rows={3}
// //                                 inputProps={{style: {fontSize: 12}}} // font size of input text
// //                                 InputLabelProps={{style: {fontSize: 14}}} // font size of input label
// //                             />
// //                         </Grid>
// //                     </Grid>
// //                 </form>
// //             )
// //         default:
// //             console.log("hey")
// //         }
// // }

// const HorizontalStepper = ({ data, data2, data3})  => {
//     return (    
//         <div>
//             <Stepper activeStep={activeStep} alternativeLabel>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>

//                 {/* <Grid container spacing={3}>
//                     <Grid item lg={6} md={6} sm={12} xs={12}>
//                         <TextField className="w-full" label="Nombre Funcionario" value={data.crimeDesc}/>
//                     </Grid>
//                     <Grid item lg={6} md={6} sm={12} xs={12}>
//                         <TextField className="w-full" label="Apellido Funcionario" />
//                     </Grid>
//                     <Grid item lg={6} md={6} sm={12} xs={12}>
//                         <TextField className="w-full" label="Placa Funcionario" />
//                     </Grid>
//                     <Grid item lg={6} md={6} sm={12} xs={12}>
//                         <Typography component="legend" style ={ {fontSize:12}}>Raiting Funcionario</Typography>
//                         <Rating name="read-only" value={value} readOnly />
//                     </Grid>
//                     <Grid item lg={12} md={12} sm={12} xs={12}>
//                         <TextField
//                             style ={ {fontSize:12, minWidth: 1050, maxHeight: 100}}
//                             id="filled-multiline-static"
//                             variant="filled"
//                             label="Descripción Status"
//                             multiline
//                             rows={3}
//                             inputProps={{style: {fontSize: 12}}} // font size of input text
//                             InputLabelProps={{style: {fontSize: 14}}} // font size of input label
//                         />
//                     </Grid>
//                 </Grid>  */}
//         </div>  
//      )
// }

// export default HorizontalStepper
