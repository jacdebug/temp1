import * as React from 'react';

export interface Props {
 //   name: string;
  //  enthusiasmLevel?: number;
   // onIncrement?: () => void;
   // onDecrement?: () => void;
  }



//name, enthusiasmLevel = 1, onIncrement, onDecrement
  function Form({  }: Props) {
    //if (enthusiasmLevel <= 0) {
     // throw new Error('You could be a little more enthusiastic. :D');
    //}
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name}
        </div>
        <div>
          <button >-</button>
          <button >+</button>
        </div>


        <form id="contactForm">

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value="" />
            </div>

            <div>
                <label htmlFor="name">Email:</label>
                <input type="emal" name="emal" id="emal" value="" />
            </div>

            <div>
                <label htmlFor="msg">Message:</label>
                <textarea id="msg"></textarea>
            </div>

            <div className="actions">
                <button type="submit">Submit</button>
                <button type="cancel">Cancel</button>
            </div>

        </form>


      </div>
    );
  }
  
export default Form;


/*
class Form extends React.Component<Props, object> {
    render() {
  
      return (
       
      );
    }
  }






        */