import { Component, Suspense } from 'react'
import { Spin } from 'antd'

const lazyHOC = (WrapComponent) => {
    class AsyncComponent extends Component {
        render() {
            return (
                <Suspense fallback={<div><Spin spinning={true}/>Loading...</div>}>
                    <WrapComponent {...this.props} />
                </Suspense>
            )
        }
    }
    return AsyncComponent
}
export default lazyHOC
