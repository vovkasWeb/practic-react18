import data from './data'
import { useState, useMemo, useTransition, useDeferredValue } from 'react'

function App() {
	const [text, setText] = useState('')
	const [posts, setPosts] = useState(data)
	// const defferedValue = useDeferredValue(text)
	const [isPending, startTransitoion] = useTransition()

	const filteredPosts = useMemo(() => {
		return posts.filter(item => item.name.toLowerCase().includes(text))
	}, [text])

	const onValueChange = e => {
    startTransitoion(()=>{
      		setText(e.target.value)
    })

	}

	return (
		<>
			<input value={text} type='text' onChange={onValueChange} />

			<hr />

			<div>
				{isPending ? (
					<h4>Loding..</h4>
				) : (
					filteredPosts.map(post => (
						<div key={post._id}>
							<h4>{post.name}</h4>
						</div>
					))
				)}
			</div>
		</>
	)
}

export default App
