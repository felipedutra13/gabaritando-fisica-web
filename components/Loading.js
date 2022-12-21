import { usePromiseTracker } from "react-promise-tracker";
import { Spinner } from 'flowbite-react';

const Loading = () => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress === true ?
        (
            <div className="pr-3">
                <Spinner color="purple"/>
            </div>
        ) : null;
};

export default Loading;