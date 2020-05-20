import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import EditDeleteFormContainer from "../posts/edit_delete_form_container";

function ModalTwo({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "edit-delete-form-container":
            component = <EditDeleteFormContainer />;
            break;
        default:
            return null;
    }
    return (

        <div className="modalTwo-background" onClick={closeModal}>
            CORRECT BACKGROUND
            <div className="modalTwo-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalTwo);