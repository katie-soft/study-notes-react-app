export 	const sortArrayByDate = (a, b) => {
	if (a.date < b.date) {
		return 1;
	} else {
		return -1;
	}
};