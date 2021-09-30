import React, { useState, useEffect } from 'react'
import { SimpleCard} from 'app/components'
import {
    Button,
    Icon,
    Grid,
} from '@material-ui/core'
import HorizontalStepper from './HorizontalStepper'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

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

    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
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
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={6}>
                            <TextValidator
                                id="filled-search"
                                label="Search field"
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
                            <TextValidator
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
                                <ColorButton variant="contained" type="submit" >
                                    <Icon>send</Icon>
                                    <span className="pl-2 capitalize">Consultar</span>
                                </ColorButton>
                            </ThemeProvider>
                        </Box>
                </ValidatorForm>
            </SimpleCard>
            <div className="py-3"></div>
            <SimpleCard title="Status de Demanda">
                <HorizontalStepper></HorizontalStepper>
            </SimpleCard>
        </div>
    )
}

export default UploadForm
