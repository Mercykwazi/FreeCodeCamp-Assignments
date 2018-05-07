import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

class ModalForEdits extends React.Component {
    constructor(props, context) {
        console.log("construting modal");
        super(props);
        this.state = {
            toShowModal: false,
            recipeName: this.props.name,
            ingredients: this.props.ingredients,
        }
        this.toEditRecipe = this.toEditRecipe.bind(this);
    }

    edit(e) {
        var change = {}
        change[e.target.name] = e.target.value;
        this.setState(change)
    }

    toEditRecipe() {
        this.setState({ toShowModal: true })
    }
    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={e => this.toEditRecipe(e)}>
                    Edit
        </Button>

                <Modal
                    show={this.state.toShowModal}
                    onHide={""}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title">
                            edit the recipe
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            name="recipeName"
                            value={this.state.recipeName}
                            onChange={this.edit.bind(this)}

                            type="text"
                        />
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel />
                            <FormControl
                                name="ingredients"
                                onChange={this.edit.bind(this)}
                                componentClass="input"
                                value={this.state.ingredients}
                            />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.replacer(this.props.name, this.state.recipeName, this.state.ingredients)} >Save </Button>
                        <Button >
                                Close 
                            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
                );
            }
        }
        
export default ModalForEdits;