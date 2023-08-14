import React, { useState } from 'react';
import { TextField, Button, Container, Typography, colors, Stack, TableRow, TableContainer, styled, TableCell, tableCellClasses, Paper, Table, TableHead, TableBody } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const Dynamic_Form = () => {
    /*intial declering state*/
    const [inputFields, setInputFields] = useState([{ key: '' }]);
    const [submitData ,setSubmitData]=useState([{}])


    /*add the inputu field function*/
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };

    const handleAddField = () => {
        const values = [...inputFields];
        values.push({ value: '' });
        setInputFields(values);
    };

    /*Remove the Input field*/
    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };


    /* Table data Remove function*/
    const handleRemoveTable = (index) => {
        const remove =[...submitData];
        remove.splice(index,1);
        setSubmitData(remove)
    };

    /*Submit the data for table function*/
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitData(inputFields);
    };



    /*table style theme*/

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    


    return (

        <Stack direction="row" justifyContent= "space-around" mt={5} component={Paper}>
            <div>
                <Typography variant="h5" className='font-weight-bold text-center mt-2' >Enter Your Student Names</Typography>
                <form onSubmit={handleSubmit}>
                    {inputFields.map((inputField, index) => (
                        <div key={index} className='mt-4'>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography variant='h6'>{index + 1}</Typography>
                                <TextField
                                    label={`Name ${index + 1}`}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    value={inputField.value}
                                    onChange={(event) => handleInputChange(index, event)}
                                />

                                <IconButton aria-label="delete" size="large">
                                    <DeleteIcon fontSize="inherit" onClick={() => handleRemoveField(index)} color='error' />
                                </IconButton>
                            </Stack>
                        </div>
                    ))}
                    <Stack direction="row" spacing={3} mt={2} justifyContent="center">
                        <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            onClick={handleAddField}
                            startIcon={<AddSharpIcon />}
                            size='small'
                        >Add
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            endIcon={<ArrowForwardIcon />}
                            size="small"
                        >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </div>

                                

            <div className=''>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">S.No</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align='right'>Remove</StyledTableCell>
                                                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {submitData.map((row,id) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {id+1}
                                    </StyledTableCell>
                                    <StyledTableCell  align="center">{row.value}</StyledTableCell>
                                    <StyledTableCell align='right'>
                                    <IconButton aria-label="delete" size="large">
                                    <CloseIcon fontSize="inherit" onClick={() => handleRemoveTable(row)} color='error' />
                                </IconButton>
                                    </StyledTableCell>
                                    </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </Stack>

    );
};

export default Dynamic_Form;
