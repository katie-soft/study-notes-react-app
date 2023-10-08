import { createContext, useState } from 'react';

export const TopicContext = createContext({
	topicId: 1
});

export const TopicContextProvider = ({ children }) => {

	const [topicId, setTopicId] = useState(1);

	return <TopicContext.Provider value={{ topicId, setTopicId }}>
		{children}
	</TopicContext.Provider>;
};