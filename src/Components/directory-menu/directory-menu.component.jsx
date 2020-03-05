import React from 'react';

import "./directory-menu.styles.scss";
import {selectDirectorySections} from '../../Redux/directory/directory.selector';
import {createStructuredSelector} from "reselect"
import MenuItem from '../menu-item/menu-item.component';

import {connect } from 'react-redux';



const Directory = ({sections}) =>(
                <div className="directory-menu">
                {
                    sections.map(({id,...theOtherSections}) => (
                        <MenuItem key= {id} {...theOtherSections} />
                    ))
                }
                </div>
        );
    



const mapStateToProps =createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);