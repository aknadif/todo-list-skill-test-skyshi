const formatDate = (date: string) => {
    const thisDate = new Date(date);
    return thisDate.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export default formatDate;
