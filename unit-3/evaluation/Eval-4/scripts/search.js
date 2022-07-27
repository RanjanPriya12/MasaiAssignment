function storeSearchterm(term) {
    term=localStorage.getItem('search_term');
    return term;

}

export default storeSearchterm