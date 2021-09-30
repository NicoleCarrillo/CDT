import React, { useState, useEffect } from 'react'
import { SimpleCard} from 'app/components'
import {
    Button,
    Icon,
    Grid,
    TextField,
} from '@material-ui/core'
import HorizontalStepper from './HorizontalStepper'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import api from 'app/services/api';

let jsondata;

const theme = createTheme({
    palette: {
      primary: {
        main: '#616060',
      },
      secondary: {
        main: '#3D372F',
      },
    },
  });


const UploadForm = () => {

    
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [data3, setData3] = useState(null)

    const [state, setState] = useState({
        date: new Date(),
    })

    // useEffect(() => {
    //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //         console.log(value)

    //         if (value !== state.password) {
    //             return false
    //         }
    //         return true
    //     })
    //     return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    // }, [state.password])

    const handleSubmit = (event) => {
        console.log("HEYYYY");    
        let url = "/getDescByComplaintID?id=" + ID;
        console.log(url);
        api.get(url)
            .then(response => {
                setData(response.data);
                console.log(data);
            })
            .catch(error => {
                console.error("error fecthing");
        })
        console.log("HEYYYY2");    
        let url2 = "/getFunctionaryByName?id=" + ID;
        console.log(url2);
        api.get(url2)
            .then(response => {
                setData2(response.data);
                console.log(data2);
            }).then(() =>{
                console.log("HEYYYY3");    
                let url3 = "/getFunctionaryRating?id=" + data2.id;
                console.log(url3);
                api.get(url3)
                    .then(response => {
                        setData3(response.data);
                        console.log(data3);
                    })
                    .catch(error => {
                        console.error("error fecthing");
                })
            }
            )
            .catch(error => {
                console.error("error fecthing");
        })
    }

    const handleChange = (event) => {  
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const ColorButton = withStyles((theme) => ({
        root: {
          color: "#ffffff",
          fontSize: 12,
          fontWeight:700,
          width: 250,
          marginBottom: 22,
          marginTop: 12,
          backgroundColor: "#3D372F",
          '&:hover': {
            backgroundColor:"#616060",
          },
        },
      }))(Button);

    const {
        ID,
        contraC,
    } = state
    
    return (
        <div className="m-sm-30">
            <SimpleCard title="Requisitos">
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={6}>
                            <TextField
                                id="filled-search"
                                label="ID "
                                type="search"
                                variant="filled"
                                className="mb-4 w-full"
                                onChange={handleChange}
                                name="ID"
                                value={ID}
                                autoComplete="new-password"
                                validators={['required']}
                                errorMessages={[
                                    'El ID es necesario',
                                ]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={6}>
                            <TextField
                                className="mb-4 w-full"
                                label="Contraseña"
                                onChange={handleChange}
                                name="contra"
                                type="password"
                                variant="filled"
                                autoComplete="new-password"
                                value={contraC}
                                validators={['required', 'isPasswordMatch']}
                                errorMessages={[
                                    'la contraseña correcta es necesaria',
                                ]}
                            />
                        </Grid>
                        </Grid>
                        <Box textAlign='center' marginTop='20px' marginBottom='10px'>
                            <ThemeProvider theme={theme}> 
                                <ColorButton variant="contained" type="submit"  onClick={handleSubmit}>
                                    <Icon>send</Icon>
                                    <span className="pl-2 capitalize">Consultar</span>
                                </ColorButton>
                            </ThemeProvider>
                        </Box>
            </SimpleCard>
            <div className="py-3"></div>
            <SimpleCard title="Consulta">
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField className="w-full" label="Nombre Funcionario"  value={data2==null ? "" : data2.name}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField className="w-full" label="Apellido Funcionario" value={data2==null ? "" : data2.surname}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField className="w-full" label="Placa Funcionario" value={data2==null ? "" : data2.num_placa}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography component="legend" style ={ {fontSize:12}}>Raiting Funcionario</Typography>
                        <Rating name="read-only" value={data3==null ? "" : data3.rating} readOnly />
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
                            value={data==null ? "" : data.crimeDesc}
                        />
                    </Grid>
                </Grid> 
            </SimpleCard>

        </div>
    )
}

export default UploadForm
