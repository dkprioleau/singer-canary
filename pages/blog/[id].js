// pages that begin/ end with [ ] are dynamic pages in Next.js
// using Next.js you don't have to code any routes!
import { useEffect, useState } from 'react';
import fire from '../../config/fire-config';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Blog = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link>
      {/* back link to go back to home page */}
      <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
    });
    // fetching only one blog entry using the id from the query parameter
    // we are fetching the blog post from the database and storing the content inside the empty content object
    // we return the object to the main function as props

return {
    props: {
      title: content.title,
      content: content.content,
     
    } 
  }
}
export default Blog