import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'
import './Modal.scss'
//import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {showFinalModal} from '../../store/actions'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function LoginModal(){
      let history = useHistory();

    const open =useSelector(state => state.showModal)
    const location =useSelector(state => state.location)
    const spys =useSelector(state => state.spys)
    const spyArray =useSelector(state => state.spyArray)
    const dispatch = useDispatch()
    
    const handleClose = () => {
        dispatch(showFinalModal(false));
    };

        return (
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={'modalWindow'}>
            <h3 id="transition-modal-title">Игра завершена!</h3>
            <h4>Локация: {location}</h4>
            <h4>Шпион{spys>1?"ы":null}:</h4>
            {spyArray.map((isSpy, index)=>{
              
            })}
            <Button onClick={handleClose} variant="outlined">Сыграть ещё раз</Button>
          </div>
        </Fade>
      </Modal>
        )
    }
    
