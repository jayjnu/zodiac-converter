var convertFortune = function (y, m, d) {
	var startYear = 1930;
	if(y < startYear || y > new Date().getFullYear()){return false;}

	/* 1930 ~ 2017 */
	var data = [4,5,5,4,4,5,5,4,4,5,5,4,4,5,5,4,4,5,5,4,4,5,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
	var isBefore = isBeforeSpring(y, m, d);
	var idx = getIdx(y, startYear, isBefore);

	return getZodByIdx(idx);

	// methods
	function isBeforeSpring(y, m, d){;
		if(m > 2){return false}
		var springDate = data[y - startYear];
		return d < springDate;
	}

	function getIdx(userYear, startYear, beforeSpring){
		var e = beforeSpring ? 5 : 6;
		return userYear - startYear + e;
	}

	function getZodByIdx(idx){
		var zods = ['쥐', '소', '호랑이', '소', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];
		var result = zods[idx] || undefined;
		var maxCall = 100;

		while(!result && maxCall > 0 ){
			startYear += 12;
			result = zods[getIdx(y, startYear, isBefore)];
			maxCall--;
		}

		if(result){
			return result;
		}else{
			throw new Error('Invalid Input Range: ', y);
		}
	}
};