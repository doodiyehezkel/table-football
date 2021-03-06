import { FC, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./NewPlayerForm.module.css"

const NewPlayerForm: FC = () => {
    const history = useHistory();
    const userNameRef = useRef<HTMLInputElement>(null);
    const userImageRef = useRef<HTMLInputElement>(null);
    const onSubmitHelper = (event: React.FormEvent<HTMLFormElement>) => {
      
        event.preventDefault();
      
        const userNameValue = userNameRef.current?.value;
        const userImageValue = userImageRef.current?.value;
        //TODO : add new validateion for empty / null inputs 
        const player = {
            name: userNameValue,
            victories: 0,
            losses: 0,
            img: userImageValue
        }
       
        fetch('https://table-football-c48e9-default-rtdb.firebaseio.com/players.json' ,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player),
        })
        .then(response => response.json())
        .then(player => {
          history.replace('/')
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        
    }

    const imgLoaded = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);

        let files = event.target.files
        let reader = new FileReader();
        if(files){
            reader.readAsDataURL(files[0])
            reader.onload = () => {
                let base64 = reader.result;
                console.log(base64)
            }

        }
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHelper}>
            <div className={`${classes.form__group} ${classes.field}`}>
                <input ref={userNameRef} className={classes.form__field} required id="user-name" type="text" placeholder="name" />
                <label className={classes.form__label} htmlFor="user-name">Name : </label>
            </div>
            <div className={`${classes.form__group} ${classes.field}`}>
                <input ref={userImageRef} className={classes.form__field} required id="user-name" type="text" placeholder="Image" />
                <label className={classes.form__label} htmlFor="user-name">Image : </label>
                
            </div>            

            <div className={`${classes.form__group} ${classes.field}`}>
                {/* <label className={classes.form__label} htmlFor="actual-btn">Image : </label> */}
                <label htmlFor="files" className="btn">Select Image</label>
                <input className={classes.form__field} id="files"  type="file" onChange={imgLoaded}/>
            </div>

            <div className={classes.submit}>
                <button> Submit </button>
            </div>
        </form>

    )
}

export default NewPlayerForm;