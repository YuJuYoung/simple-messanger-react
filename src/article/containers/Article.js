import { connect } from 'react-redux'
import Article from '../components/Article'

export default connect((state) => {
    return {
        getLoginstate: state => state.article.logined
    }
})(Article)