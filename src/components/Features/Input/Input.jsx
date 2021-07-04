import React , {useEffect,useContext,useRef} from 'react'
import { TextField } from "@material-ui/core";
import { UserProvider } from '../../Context/Context';

export default function Input() {
    const Focus = useRef(null);
    const setInfo = useContext(UserProvider).setInfo
    const info = useContext(UserProvider).info
    function setInformation(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
      }
    useEffect(() => {
        Focus.current.focus();
      }, []);
    return (
        <TextField
        inputRef={Focus}
        onChange={setInformation}
        name="firstName"
        type="text"
        label="Your first name..."
        id="outlined-textarea"
        multiline
        variant="outlined"
      />
    )
}
