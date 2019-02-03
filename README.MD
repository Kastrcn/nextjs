# nextjs

## react 组件声明

1

```react
const Page = () => (
    <p>This is the about page</p>
  )

  export default () => (<Layout page={Page}/>)
```

2

```react
const content = (<p>This is the about page</p>)
export default () => (<Layout content={content}/>)
```

3

```react
export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

4

```react
const Page = () => (
    <p>This is the about page</p>
)
export default Layout(Page)
```

## 嵌套组件

MyLayout.js

```react
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
```

Header.js

```react
import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
```



## 初始化异步渲染

1. 初始化
2. 异步
3. 渲染

```react
# 渲染
const Index = (props) => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>

      {props.shows.map(({ show }) => (
        <PostLink key={show.id} post={show} />
      ))}

    </ul>
  </div>
)

# 初始化
Index.getInitialProps = async function () {
    # 异步
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
```

markdown渲染

```react
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
))
```

## next.config.js

配置export路由

```js
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/p/11464': { page: '/post', query: { id: 11464 } },
            '/p/757': { page: '/post', query: { id: 757 } },
            '/p/900': { page: '/post', query: { id: 900 } }
        }
    }
}

```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run export

# deploy static project 
$ yarn run deploy
```