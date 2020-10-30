var driveId = document.getElementById('d');
var skillId = document.getElementById('s');
var growthId = document.getElementById('g');
var summaryId = document.getElementById('s1');

const form = document.querySelector('.form-input');

   var response1 = Number(document.getElementById("question1").value);
   // var response1 = document.getElementById("question1").value;
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);

    var x1 = response1*10;
    var y1 = response2*10;




var output = document.getElementById('output');
var box = document.querySelector('.box');
var input1 = document.getElementById('input1');

output.style.visibility = "hidden";
box.style.visibility = "hidden";
input1.style.visibility = "visible";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(20, -90, 5, 5);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

function myFunction(){
    var response1 = Number(document.getElementById("question1").value);
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);
    var text = document.querySelector('.invalid');
    var ques1 = document.querySelector('.ques1');
    var ques2 = document.querySelector('.ques2');
    var ques3 = document.querySelector('.ques3');
    /*if(response1==0 && response1!='null'){
        ques1.style.border = "2px solid red";
        text.style.display = "block";
        
    }else{
        ques1.style.border = "0px solid black";
        text.style.display = "none";
    }

    if(response2==0){
        ques2.style.border = "2px solid red";
        text.style.display = "block";
        
    }else{
        ques2.style.border = "0px solid black";
        text.style.display = "none";
    }

    if(response3==0){
        ques3.style.border = "2px solid red";
        text.style.display = "block";
        
    }else{
        ques3.style.border = "0px solid black";
        text.style.display = "none";
    }*/

    if(response1>10 || response1<0){
        alert("Please Enter Numbers from 1 to 10");
    }else{

    }

    if(response2>10 || response2<0){
        alert("Please Enter Numbers from 1 to 10");
    }else{

    }

    if(response3>10 || response3<0){
        alert("Please Enter Numbers from 1 to 10");
    }else{

    }

    
}
function draw(){
    const triangle = document.querySelector('.triangle');
    const dot = document.querySelector('.dot');
    const dot1 = document.querySelector('.dot1');
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');
    const dot4 = document.querySelector('.dot4');
    const dot5 = document.querySelector('.dot5');
    const dot6 = document.querySelector('.dot6');
    const dot7 = document.querySelector('.dot7');
    const dot8 = document.querySelector('.dot8');
    const dot9 = document.querySelector('.dot9');
    const dot10= document.querySelector('.dot10');
    const dot11= document.querySelector('.dot11');
    const dot12= document.querySelector('.dot12');
    const dot13= document.querySelector('.dot13');
    const side7 = document.querySelector('.side7');
    const side8 = document.querySelector('.side8');
    const side9 = document.querySelector('.side9');
    const side4 = document.querySelector('.side4');
    const side5 = document.querySelector('.side5');
    const side6 = document.querySelector('.side6');
    var response1 = Number(document.getElementById("question1").value);
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);


    const num1 = response1*10;
    const num2 = response2*10;
    const num3 = response3*10;

    triangle.style.borderBottom = num1 + "px solid #206a5d";
    triangle.style.borderLeft = num3+ "px solid transparent";
    triangle.style.borderRight = num2 + "px solid transparent";

    side7.textContent = response1;
    side8.textContent = response2;
    side9.textContent = response3;

    side4.textContent = response1;
    side5.textContent = response2;
    side6.textContent = response3;

   /* if(response1<5 && response2<5){
       side5.style.top= "35px";
       side5.style.left= "50px";
       side6.style.top= "35px";
       side6.style.right= "50px";
    }if(response1>=5 && response2>=5){
        side5.style.top= "50px";
       side5.style.left= "60px";
       side6.style.top= "50px";
       side6.style.right= "60px";
    }if((response1==1||response1==2)&&(response2 == 1 || response2 == 2 || response2 ==3)&&(response3 == 1 || response3 == 2 || response3 ==3))
    {
        side5.style.top= "20px";
       side5.style.left= "40px";
       side6.style.top= "20px";
       side6.style.right= "40px";
    }if((response1==5 || response1==6) && (response2==7 || response2==8 || response2==9)
    && (response3==7 || response3==8 || response3==9)){
       
        side5.style.top= "50px";
       side5.style.left= "70px";
       side6.style.top= "50px";
       side6.style.right= "90px";

    }*/

    

    if(response1>5 && response2<5){
        dot.style.display = "block";
    }else if(response1<5 && response2<5){
        dot1.style.display = "block";
    }else if(response1<5 && (response2>5 && response2<10)){
        dot3.style.display = "block";
    }else if((response1>5 && response1<10) && response2 === 5){
        dot4.style.display = "block";
    }else if(response1==5 && response2==5){
        dot5.style.display = "block";
    }else if(response1==5 && response2==10){
        dot6.style.display = "block";
    }else if(response1==10 && response2==10){
        dot7.style.display = "block";
    }else if(response1<=5 && response2<5){
        dot8.style.display = "block";
    }else if(response1<5 && response2==5){
        dot9.style.display="block";
    }else if(response1==5 && response2>5){
        dot10.style.display="block";
    }else if(response1>5 && response2==10){
        dot11.style.display = "block";
    }else if(response1<5 && response2==10){
        dot12.style.display = "block";
    }else if(response1==10 && response2==5){
        dot13.style.display = "block";
    }
    else{
        dot2.style.display = "block";
    }
    if(response1==10 && response2==10 && response3==10){
        triangle.style.right = "149px";
      }
    else if(response1==9 && response2==9 && response3==9)
    {
        triangle.style.top = "-205px";
    }else if(response1<=5 && response2<=5 && response3<=5){
        triangle.style.top = "-160px";
    }else if(response1==5 && response2>5 && response3>5){
        triangle.style.top = "-170px";
    }else if(response1>5 && response2<=5 && response3<=5){
        triangle.style.top = "-190px";
    }else if(response1==10 && response2>=5 && response3>=5){
        triangle.style.top = "-210px";
        triangle.style.right = "145px";
    }else if(response1==10 && response2>=5 && response3<5){
        triangle.style.top = "-210px";
        triangle.style.right = "128px";
    }
    else if(response1>5 && (response2>5 && response2<=9) && (response3>5 && response3<=9)){
        triangle.style.top = "-190px";
    }else if((response1>5 && response1<9) && (response2==9 || response2==10) && (response3==9)){
        triangle.style.top = "-195px";
    }else if(response1==8 && (response2==9||response2==10) && (response3==9 || response3==10)){
        triangle.style.top = "-200px";
    }else if(response1<5 && response2<5 && response3>5){
        triangle.style.top = "-180px";
    }else if(response1 == 5 && response2 == 10 && response3 <=5){
        triangle.style.top = "-185px";
    }
    else if((response1==5 || response1==6) && (response2==7 || response2==8 || response2==9)
              && (response3==7 || response3==8 || response3==9)){
                triangle.style.top = "-175px";
              }else if((response1==5 || response1==6||response1==7||response1==8)&&(response2==9 || response2==10)
               &&(response3==9 || response3==10)){
                triangle.style.top = "-180px";
               }else if(response1>5 && response2<=5 && response3>5){
                triangle.style.top = "-200px";
                triangle.style.right = "158px";
               }else if(response1>5 && (response2==9 ||response2==10) && (response3>=5 && response3<=7)){
                   triangle.style.top = "-200px";
                   triangle.style.right = "140px";
               }else if(response1<5 && response2>5 && response3<5){
                   triangle.style.top = "-150px";
               }else if(response1<5 && response2>5 && response3>5 ){
                   triangle.style.top = "-150px";
               }else if(response1<5 && response2>5 && response3==5){
                triangle.style.top = "-150px";
               }
               else if(response1<=5 && response2<=5 && response3>5)
               {
                triangle.style.top = "-180px";
               }else if(response1>5 && response2>5 && response3==10){
                triangle.style.top = "-180px";
               }
}

/*function graph(){
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 2, 0, 2 * Math.PI);
ctx.stroke();
}*/



form.addEventListener('submit',e => {

    output.style.visibility = "visible";
    box.style.visibility = "visible";
    input1.style.visibility = "hidden";
    
    draw();

    //graph();

    var response1 = Number(document.getElementById("question1").value);
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);
    var error= document.querySelector('.error');
    var drive = document.querySelector('.drive');
    var skill = document.querySelector('.skill');
    var growth = document.querySelector('.growth');
    var summary = document.querySelector('.summary');

    if(response1==0 || response2==0 || response3==0){
        //alert("Please Enter the Values from 1 to 10");
        error.style.display="block";
        output.style.visibility = "hidden";
        box.style.visibility = "hidden";
    }

    if(response1==1){
        driveId.style.backgroundColor = "#f4abc4";
    }else if(response1==2 || response1==3){
        driveId.style.backgroundColor = "#FFE5B4";
    }else if(response1==4){
        driveId.style.backgroundColor = "#FDD451";
    }else if(response1==5 || response1==6 || response1==7){
        driveId.style.backgroundColor = "#e5df88";
    }else{
        driveId.style.backgroundColor = "#006400";
    }

    if(response2==1){
        skillId.style.backgroundColor = "#f4abc4";
    }else if(response2==2 || response2==3){
        skillId.style.backgroundColor = "#FFE5B4";
    }else if(response2==4){
        skillId.style.backgroundColor = "#FDD451";
    }else if(response2==5 || response2==6 || response2==7){
        skillId.style.backgroundColor = "#e5df88";
    }else{
        skillId.style.backgroundColor = "#006400";
    }

    if(response3==1){
        growthId.style.backgroundColor  = "#f4abc4";
    }else if(response3==2 || response3==3){
        growthId.style.backgroundColor  = "#FFE5B4";
    }else if(response3==4){
        growthId.style.backgroundColor = "#FDD451";
    }else if(response3==5 || response3==6 || response3==7){
        growthId.style.backgroundColor  = "#e5df88";
    }else{
        growthId.style.backgroundColor  = "#006400";
    }

    //summaryId.createLinearGradient(0, 0, 170, 0);
   

    if(response1<=4)
    {
        
        drive.innerHTML = "Your drive and motivation is relatively low. It appears that your interests, values and goals in life diverges from what you obtain from your work. There is a saying that goes like this 'Different Folks, Different Strokes.' All of us are unique and sometimes it takes a longer time to find what we are looking for. ";

    }else if(response1>4 && response1<=7){
        
        drive.innerHTML = "You are motivated to do a good job but you could be still in the process of figuring out where your career is leading. Although you have some clues about it and you know how to make things work, you have to make some compromises which might drain you at times. Trying talking to your boss to get some perspective or hear some experience on how those kinks could be ironed out so that your full potential can be unleashed.  ";

    }else{
        
        drive.innerHTML = "It's great that you have found the connection between between your job and your passion. This will empower your with the motivation to continue your drive towards excellence in your role. "
    }

    if(response2<=4)
    {
        
        skill.innerHTML = "Practice makes perfect. It takes patience, fortitude and perseverance to learn and get good at somethings Some of us get there faster, some take a longer time. But as long as you keep an open and positive mind and never give up, you will move forward. Sometimes, a change in perspective or paradigm can go a long way. Don't suffer alone and in silence. Discuss with your supervisor to look at what resouces or help you need to become more adept at your work.  ";

    }else if(response2>4 && response2<=7){
        
        skill.innerHTML = "You  have some confidence in your ability and that is good. You feel that you have the skills, knowledge and competency to do your job well. It may be good for you to figure out how you can do it even better. Trying bouncing some ideas off your supervisor to see how you can accelerate your development. Growth can come in all forms. It can taking on new projects, mentoring a new comer or getting better at presentation or communication. Be open and strive to grow even more.  ";

    }else{
        skill.innerHTML = "It’s time to take the next step and push the envelop. How do you continue to improve further? It's OK if you do not have the answer. You may find it useful to tap on your supervisor for advice on how to sustain this momentum and also get another perspective to help you uncover blindspots and discover new potential within yourself."
    }

    if(response3<=4)
    {
      
        growth.innerHTML = "You seem to be experiencing challenges in gaining new insights and build your skills and competencies in your current role. There may be possible circustances or roadblocks which derailed you from learning and growing in your job. Seek help and advice from your supervisor or HR to discuss possible solutions in taking things forward.   ";

    }else if(response3>4 && response3<=7){
        growth.innerHTML = "It good that you are experiencing reasonable growth in your role. Learning is a lifelong commitment and it always good to get better and know more. Maybe you can have a conversation with your boss to see what other development there are in store for you? Or both of you can work out a plan for your development together? ";

    }else{
        growth.innerHTML = "Life is a journey of continuous learning. It’s great that you are growing. Reflect on how you achieve this and do your best to maintain this balance and harmony in your work and life. If you ever stumble or fall, don't let it get you down. Learn to forgive yourself and step right back up. Keep doing this because learning never ends."
    }

    e.preventDefault();

    var response4 = response1+response2+response3;
    var driveColor = driveId.style.backgroundColor;
    var skillColor=skillId.style.backgroundColor;
    var growthColor = growthId.style.backgroundColor;

    if(response4<13){
        summaryId.style.background = "linear-gradient" + "(" + driveId.style.backgroundColor + "," + skillId.style.backgroundColor+ "," + growthId.style.backgroundColor+")";
        //summaryId.style.backgroundColor = "#ffe05d";
        summary.innerHTML = "You are likely going through a difficult period in some areas of your work. You could be experiencing frustration and anxiety that hinder you from realizing your true potential. Have a discussion with your superivisor or HR to see how the misalignments can be resolved. ";

    }else if(response4>13 && response4<=21){
        if(response1<5 || response2<5 || response3<5){
            summaryId.style.background = "linear-gradient" + "(" + driveId.style.backgroundColor + "," + skillId.style.backgroundColor+ "," + growthId.style.backgroundColor+")";
            //summaryId.style.backgroundColor = "#b8de6f";
            summary.innerHTML = "Life is like a box of chocolate as Forrest Gump has so famoulsy said. There are ups and downs but we will get there if we perserve and keep an open mind. You might not be absolutely clear on your career path or face resistance in certain areas but you seem be moving along relatively well in some aspects.  Talk more, learn more and in time to come, you will get closer to your goal. Feel free to go to your supervisor or HR anytime you need some help on how to move forward. ";

        }else if(response1>4&&response2>4&&response3>4)
        {
            summaryId.style.background = "linear-gradient" + "(" + driveId.style.backgroundColor + "," + skillId.style.backgroundColor+ "," + growthId.style.backgroundColor+")";
            //summaryId.style.backgroundColor = "#b8de6f";
            summary.innerHTML = "Although there might be areas that you are not too sure of, in general you are not too far off track. You might be at crossroads in certain areas but in others you could be nearer to your goals and doing well. Continue to make strides and seek clarity in your career and you are bound to make good progress in time. Never stop learning and never stop pushing ahead. You might want to accelerate this process by checking in with your supervisor for some tips or advice.";

        }
    }else{
        if(response1<5 || response2<5 || response3<5)
        {
            summaryId.style.background = "linear-gradient" + "(" + driveId.style.backgroundColor + "," + skillId.style.backgroundColor+ "," + growthId.style.backgroundColor+")";
            //summaryId.style.backgroundColor = "green";
            summary.innerHTML = "It is great that you feel excellent in some areas. But at the same time, there are areas that you are still reconciling. Reflect on how you might leverage on the positives and strength that you have to resolve the challenges that you face in those areas and greateness will be upon you fast and furious.  ";
        }else if(response1>4&&response2>4&&response3>4){
            summaryId.style.background = "linear-gradient" + "(" + driveId.style.backgroundColor + "," + skillId.style.backgroundColor+ "," + growthId.style.backgroundColor+")";
            //summaryId.style.backgroundColor = "green";
            summary.innerHTML = "What got you here won't get you there.' Words of wisdom by world renowed CEO coach, Marshall Goldsmith and also the eponymous title of his international bestseller that might best describe where you are right now. Continue to hone your craft and seek personal mastery. With your heart and goals aligned, you will defintely be able to scale even greater heights.";
        }
       
    }
    

});

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

