import styles from '../styles/pages/detailactivity.module.css';
import Layout from '../components/layout';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { detailActivity } from '../action/activity';
import Header from '../components/organism/detailActivity/header';
import ModalAddTodo from '../components/organism/detailActivity/modalAddTodo';
import { EmptyTodo } from '../components/icons';
import TodoItem from '../components/organism/detailActivity/todoItems';
import Loading from '../components/elements/loading';
import ModalEditTodo from '../components/organism/detailActivity/modalAddTodo/modalEditTodo';
// import { getTodoActivity } from '../action/todo';


export default function DetailAcivity(){
    let { id } = useParams(); 
    const [activity, setActivity] = useState({});
    const [titleActivity, setTitleActivity] = useState('');
    const [showModalAdd, setShowModalAdd] = useState(false);

    const [loading, setLoading] = useState(true);

    const getDetailActivity = useCallback( async () => {
        const response = await detailActivity(id);
        setActivity(response);
        setTitleActivity(response.title);
    }, []);
    useEffect(() => {
        getDetailActivity();
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getDetailActivity]);
    return(
        <Layout>
            <Header 
                styles={styles}
                activity={activity}
                setActivity={setActivity}
                setShowModal={setShowModalAdd}
                titleActivity={titleActivity} 
                setTitleActivity={setTitleActivity}
            />
            {loading ? 
                ( <Loading /> ) :
                (activity?.todo_items?.length > 0 ? 
                    <TodoItem 
                        getDetailActivity={getDetailActivity}
                        activity={activity} 
                        setActivity={setActivity}
                    />
                     :
                    <EmptyTodo className={styles.emptyTodoIcon} />
                )
            }
            <ModalAddTodo 
                id={id}
                getAllTodo={getDetailActivity} 
                showModal={showModalAdd} 
                setShowModal={setShowModalAdd} 
            />
            
        </Layout>
    )
}

