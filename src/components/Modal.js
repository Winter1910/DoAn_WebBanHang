import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id={ this.props.id } tabIndex="-1" role="dialog" aria-labelledby={ this.props.ariaLabelledby } aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thông báo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            { this.props.children }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={ this.props.onClick }
                                className="btn btn-primary" data-dismiss="modal">{ this.props.accept }</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}