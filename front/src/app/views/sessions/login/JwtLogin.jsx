import React, { useState } from 'react'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import Box from '@material-ui/core/Box';

import { makeStyles,withStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#3D372F',
    },
    card: {
        maxWidth: 700,
        borderRadius: 8,
        margin: '3rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const JwtLogin = () => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            history.push('/forms/basic')
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    const ColorButton = withStyles((theme) => ({
        root: {
          color: "#ffffff",
          fontSize: 10,
          fontWeight:700,
          backgroundColor: "#616060",
          '&:hover': {
            backgroundColor: "#3D372F",
          },
        },
      }))(Button);


    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
            >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <img
                            alt="description"
                            class="w-300 justify-center h-full"
                            src="/assets/images/logos/LogoCDT.png"
                            text-align= "center"
                        />
                    </Grid>
                </Grid>
                <Box textAlign='center' marginTop='20px' marginBottom='10px'>
                    <ColorButton variant="contained" size="small" disabled={loading} type="submit" onClick={handleFormSubmit}>
                        Comenzar
                    </ColorButton>
                    {loading && (
                        <CircularProgress
                            size={24}
                            className={
                                classes.buttonProgress
                            }
                        />
                    )}
                </Box>
            </Card>
        </div>
    )
}

export default JwtLogin
