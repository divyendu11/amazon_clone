import Alert from 'react-bootstrap/Alert';
export default function MessageBox(props){


    return (<Alert variant={props.variant || 'info'}>
        {props.children} 
    </Alert>
);
}
// props.children represents the content b/w the opening and closing tags
