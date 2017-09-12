import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
  }


class Form extends React.Component<Props, object> {
    render() {
  
      return (
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
                <label htmlFor="msg">Name:</label>
                <textarea id="msg"></textarea>
            </div>

            <div className="actions">
                <button type="submit">Submit</button>
                <button type="cancel">Cancel</button>
            </div>

        </form>
      );
    }
  }

/*


function Form({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {

    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        
    );
}
*/
export default Form;