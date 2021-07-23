import React, { Component } from 'react';

import iconProgram from '../../assets/images/i-program.svg';
import iconWarning from '../../assets/images/i-warning.svg';
import iconError from '../../assets/images/i-error.svg';
import iconMoreVert from '../../assets/images/i-more_vert.svg';
import iconEdit from '../../assets/images/i-edit.svg';
import iconShare from '../../assets/images/i-share.svg';
import iconDel from '../../assets/images/i-delete.svg';
import iconExp from '../../assets/images/i-expand.svg';

const BarSlctr = (props) => {
    const { key, title, contains } = this.props
        return (
            <div className="cmpt_program_bsct" key={key}>
                <div className="program_bsct-icon"><img src={iconProgram} alt="prg" /></div>
                <div className="program_bsct-title">{title} <span>( {contains} ) program stages</span>
                </div>
                <div className="program_bsct-warning_error slctr_hidden">
                    <img src={iconWarning} alt="wrng" />
                    <img src={iconError} alt="err" />
                    <div className="program_bsct-cw">3</div>
                    <div className="program_bsct-ce">2</div>
                    <div className="program_bsct-cont_w slctr_hidden">
                        <div className="program_bsct-warnings">No form name set - the Long Name will be used</div>
                        <div className="program_bsct-warnings">Feedback active, but not feedback text</div>
                        <div className="program_bsct-warnings">Another low-importance violation...</div>
                    </div>
                    <div className="program_bsct-cont_e slctr_hidden">
                        <div className="program_bsct-errors">Numerator set, but not Order set</div>
                        <div className="program_bsct-errors">Denominator not set (numerator is set)</div>
                    </div>
                </div>
                <div className="program_bsct-cta">
                    <img src={iconMoreVert} alt="wrng" />
                    <img src={iconExp} alt="exp" />
                    <div className="menu_program slctr_hidden">
                        <div className="menu_program-edit">
                            <div className="i-edit"><img src={iconEdit} alt="edit" /></div>
                            <div className="i-text">Edit program</div>
                        </div>
                        <div className="menu_program-sharing">
                            <div className="i-sharing"><img src={iconShare} alt="share" /></div>
                            <div className="i-text">Sharing</div>
                        </div>
                        <div className="menu_program-delete">
                            <div className="i-delete"><img src={iconDel} alt="del" /></div>
                            <div className="i-text">Delete program</div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default BarSlctr;