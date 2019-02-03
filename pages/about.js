import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <p>This is the about page</p>
    </Layout>
)




// 1
// const Page = () => (
//     <p>This is the about page</p>
//   )

//   export default () => (<Layout page={Page}/>)

// 2
// const content = (<p>This is the about page</p>)
// export default () => (<Layout content={content}/>)

// 3
// export default () => (
//     <Layout>
//        <p>This is the about page</p>
//     </Layout>
// )


// 4
// const Page = () => (
//     <p>This is the about page</p>
// )
// export default Layout(Page)

