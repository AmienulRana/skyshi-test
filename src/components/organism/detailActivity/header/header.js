import HeaderActivity from '../../activity/header/activity';
import Button from '../../../elements/button';
import { ChevronLeft, Pencil, PlusIcon } from '../../../icons';
import { editActivity } from '../../../../action/activity';
import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Header({ activity, setActivity, setShowModal, styles,titleActivity, setTitleActivity}){
    const [editTitleActivity, setEditTitleActivity] = useState(false);
    const backToHome = () => window.history.back();

    const handleEditStateTitleActivity = (e) => {
        setTitleActivity(e.target.value);            
    }
    const handleEditTitleActivity = async (e) => {
        if(e.key === 'Enter'){
            if(titleActivity !== activity.title){
                const response = await editActivity({ id:activity.id, title:titleActivity });
                setActivity({...activity, title: response.title});
            }
            setEditTitleActivity(false);
        }
    }
    return(
        <HeaderActivity>
                <div className={styles.activityAction}>
                    <ChevronLeft data-cy="todo-back-button" onClick={() => backToHome()} />
                    { editTitleActivity ? 
                        <input 
                            type="text" 
                            value={titleActivity} 
                            onChange={handleEditStateTitleActivity}
                            onKeyDown={handleEditTitleActivity}
                            autoComplete={true}
                         /> : 
                        <h1 data-cy="todo-title" onClick={() => setEditTitleActivity(state => !state)}>{titleActivity}</h1>
                    }
                    <Pencil 
                        data-cy="todo-title-edit-button"
                        onClick={() => setEditTitleActivity(state => !state)}/>
                </div>
                <Button datacy="todo-add-button" background="primary" onClick={() => setShowModal(true)}>
                    <PlusIcon />
                    Tambah
                </Button>
        </HeaderActivity>
    )
}

Header.propTypes = {
    activity: PropTypes.object,
    setActivity:PropTypes.func,
    setShowModal:PropTypes.func,
    styles:PropTypes.object,
    titleActivity:PropTypes.string,
    setTitleActivity:PropTypes.func,
}