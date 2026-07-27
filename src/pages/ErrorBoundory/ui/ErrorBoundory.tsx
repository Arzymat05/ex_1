import React, {ErrorInfo, Suspense} from "react";
import ErrorMessage from "shared/ui/ErrorMessage/ui/ErrorMessage";


interface ErrorBoundoryProps {
    children: React.ReactNode;
}
interface ErrorBoundoryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundoryProps, ErrorBoundoryState> {
    constructor(props:ErrorBoundoryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;
        if (hasError) {
            return(<Suspense fallback={""}>
                <h1><ErrorMessage/></h1>
            </Suspense>)
            ;
        }

        return children;
    }
}
export default ErrorBoundary;