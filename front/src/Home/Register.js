import React from 'react';
import './Home.css';
export function Register(){
    const image2 = 'https://fiqueisemcracha.com.br/wp-content/uploads/2015/11/signup-button.png'
    
    return(
       
        <div>
            <div className="image2">
                <img src={image2} width="50%" />
                
                </div>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control"></input>
                </div>

            </form>
        </div>

    );

}