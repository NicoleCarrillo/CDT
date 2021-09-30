import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Brown from '@material-ui/core/colors/brown';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import api2 from 'app/services/api2';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        //main: '#616060',
        main:Brown[300],
      },
      secondary: {
        main: '#3D372F',
      },
    },
  });

let randomV;
let randomC ="";
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const SimpleForm = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        randomV = Math.floor(Math.random() * (20000 - 10000) + 1000);
        for ( let i = 0; i < 5; i++ ) {
            randomC += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        let url = "/putComplain?tipo_delito="+delito+"&desc="+descripcion+"&id_carpeta=7&ubicacion="+ubicacion+"&fecha=2021-09-1 06:06:06"+"&nombre_sospechoso="+nombreSospechoso+"&apellido_sospechoso="+apellido+"&desc_sospechoso="+rasgos+"&aka=" + alias;
        console.log(url);
        api2.put(url)
            .then(response => {
                setData(response.data);
                console.log(data);
            })
            .catch(error => {
                console.error("error fecthing");
        })
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [delito, setDelito] = React.useState('');
    const [nombreSospechoso, setNombre] = React.useState('');
    const [descripcion, setDesc] = React.useState('');
    const [alias, setAlias] = React.useState('');
    const [ubicacion, setUbi] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [rasgos, setRasgos] = React.useState('');

    const handleChangeDelito = (event) => {
      setDelito(event.target.value);
    };
  
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


    const handleChangeNombre = (event) => {
        event.persist()
        setNombre(event.target.value);
    }

    const handleChangeDesc = (event) => {
        event.persist()
        setDesc(event.target.value);
    }

    const handleChangeAlias = (event) => {
        event.persist()
        setAlias(event.target.value);
    }

    const handleChangeUbi = (event) => {
        event.persist()
        setUbi(event.target.value);
    }

    const handleChangeApellido = (event) => {
        event.persist()
        setApellido(event.target.value);
    }
    
    const handleChangeRasgos = (event) => {
        event.persist()
        setRasgos(event.target.value);
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
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

      const{
        fecha,
        genero,
    }= state

    return (
        <div>
            <Grid container spacing={6}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormControl style={{minWidth: 300, maxHeight: 100}} size="small">
                        <InputLabel style ={{fontSize:14}}>Delito</InputLabel>
                        <Select
                            style ={{fontSize:12}}
                            value={delito}
                            label="Delito"
                            onChange={handleChangeDelito}
                            >
                            <MenuItem value="" style ={{fontSize:12}}>
                                <em>Especial</em>
                            </MenuItem>
                            <MenuItem value={10} style ={{fontSize:12}}>Homicidio</MenuItem>
                            <MenuItem value={20} style ={{fontSize:12}}>Robo</MenuItem>
                            <MenuItem value={30} style ={{fontSize:12}}>Traición a la patria</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box textAlign='center' marginTop='20px' marginBottom='50px' >
                    <TextField
                        style ={ {fontSize:12, minWidth: 1060, maxHeight: 100}}
                        id="outlined-multiline-static"
                        label="Descripción Delito"
                        multiline
                        rows={5}
                        size="small"
                        inputProps={{style: {fontSize: 14}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                        onChange={handleChangeDesc}
                        value={descripcion}
                        required
                    />
                </Box>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                            style ={ {fontSize:14}}
                            className="mb-4 w-full"
                            label="Nombre Sospechoso"
                            onChange={handleChangeNombre}
                            type="text"
                            name="nombreSospechoso"
                            value={nombreSospechoso || ''}
                        />
                        <TextField
                            className="mb-4 w-full"
                            label="Alias"
                            style ={ {fontSize:14}}
                            onChange={handleChangeAlias}
                            type="text"
                            name="alias"
                            value={alias || ''}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Fecha"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                value={fecha}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <TextField
                        style ={ {fontSize:12, minWidth: 500, maxHeight: 100, marginBottom:20}}
                        id="outlined-multiline-static"
                        label="Ubicación"
                        multiline
                        rows={4}
                        size="small"
                        inputProps={{style: {fontSize: 14}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                        onChange={handleChangeUbi}
                        value={ubicacion}
                        required
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                            style ={ {fontSize:4}}
                            className="mb-4 w-full"
                            label="Apellido"
                            onChange={handleChangeApellido}
                            type="text"
                            name="apellido"
                            value={apellido || ''}
                        />
                        <RadioGroup
                            style ={ {fontSize:4}}
                            className="mb-4"
                            value={genero || ''}
                            name="genero"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Masculino"
                                control={<Radio color="secondary" />}
                                label="Masculino"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Femenino"
                                control={<Radio color="secondary" />}
                                label="Femenino"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Otro"
                                control={<Radio color="secondary" />}
                                label="Otro"
                                labelPlacement="end"
                            />
                        </RadioGroup>

                        <TextField
                        style ={ {fontSize:14, minWidth: 500, maxHeight: 100, marginBottom:20}}
                        id="outlined-multiline-static"
                        label="Rasgos Físicos Sospechoso"
                        multiline
                        rows={7}
                        size="small"
                        inputProps={{style: {fontSize: 12}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        onChange={handleChangeRasgos}
                        value={rasgos}
                        />
                    </Grid>
                </Grid>
                <Box textAlign='center' marginTop='20px' marginBottom='10px'>
                <ThemeProvider theme={theme}> 
                    <ColorButton variant="contained" type="submit" onClick={handleClick}>
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Denunciar</span>
                    </ColorButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        style ={ {top:'700px',left:'650px'}}
                    >
                    <Typography sx={{ p: 1 }} style ={ {fontSize:20}}>Your ID:{data == null ? "intente de nuevo" : data.idDenuncia}, Your PASSWORD:{randomC}</Typography>
                    </Popover>
                </ThemeProvider>
                </Box>
        </div>
    )
}

export default SimpleForm
