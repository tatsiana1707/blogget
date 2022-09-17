const formatDate = date => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minutes: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));
};


export default formatDate;
