function truncateString(str, num) {
    // if num is greater then 3, return and truncate str at num and add "..."
	if (num <= 3) {
		var smStr = str.substr(0, num) + "...";
		return smStr;
    // if str length is greater than num, return string to num - 3 and add "..."
	} else if (str.length > num) {
		var truncStr = str.substr(0, num - 3) + "...";
		return truncStr;
    // if any other case return the sting
	} else {
		return str;
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
