window.addEventListener('load',attachEventListeners)

function attachEventListeners(){

    const arrCourses = [{name:"Java Fundamentals",price:170},{name:"Java Advanced",price:180},
        {name:"Java DB",price:190},{name:"Java WEB",price:480}];
    const types = [{name:"Onsite",discount:0},{name:"Online",discount: 0.06}];
    let resultCourses = [];
    let totalCost = 0;

    // <label>
    //     <input type="checkbox" value="java"/>
    //     Java Fundamentals
    // </label>
    const getCourseItem = function (course) {
         const input = $('<input/>')
             .attr('type','checkbox')
             .val(course.name);
         return $('<label/>')
             .append(input)
             .append("\t"+course.name);
    };
    // <li>
    //     <label>
    //         <input type="radio" value="onsite" name="education-type">
    //             Onsite
    //     </label>
    // </li>
    const getRadioItems = function (type){
         const input = $('<input/>')
            .attr('type','radio')
            .val(type.name)
            // .name("education-type");
        return $('<label/>')
            .append(input)
            .append("\t"+type.name);
    }
    // <li>Java WEB</li>
    const getResultItems = function (resultArr){
        return resultArr.map(x=>$('<li/>').text(x))
    }

    const modifyList = (items, generateItemFunction) => {
     return items
            .map(x=>generateItemFunction(x))
            .map(k=>$('<li/>').append(k))
    }

    const generateCourseList = (input) => {
        const courseItems = modifyList(arrCourses, getCourseItem)
            courseItems.forEach(x=>$(`.${input}`).append(x))
      $('.checked li input').attr('checked','checked')
    };
    const generateRadioList = (input) => {
        const radioItems = modifyList(types, getRadioItems)
            radioItems.forEach(k=>$(`.${input}`).append(k))
        // $('.radio li:first-of-type input').attr('checked','checked')
    }

    const generateResultList = (input) => {
        const resultItems = getResultItems(resultCourses);
           resultItems.forEach(x=>$(`.${input}`).append(x))
    }

    generateCourseList("input");
    generateRadioList("radio");

    function getAllSelectedCourses(){
        const finalResult = Array.from($('.checked li input:checked')).map(x=>$(x).val());
        let filterResult = arrCourses.filter(x=>x.name).map(x=>x.name);
        finalResult.forEach(k=>{
            if (filterResult.includes(k)){
                totalCost+=arrCourses.filter(x=>x.name===k)[0].price;
            }
        })
        return finalResult;
    }

    $('#sign').on('click',function selectStuff(){
        resultCourses = getAllSelectedCourses();
        generateResultList("education")
        if($('.radio li input:checked').val()!=="Onsite"){
            totalCost*=(1-0.06);
        }
        $('#cost').text(totalCost);
    })

    $('.education').on('click','li',function(){$(this).remove()});

}