

let url="https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=le+mans&sort=date_end&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.tags=le+mans";


fetch(url).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        
        
        document.querySelector('#lieux').innerHTML=data.parameters.q;
        document.querySelector('#events').innerHTML=data.records[length].fields.date_start;
        
        function updateBtn() {
            document.querySelector('#test').innerHTML=data.parameters.rows;

        }
     })
);

