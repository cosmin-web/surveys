<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survey</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        body{
            background-image: url('pictures/compSurvBG.jpg');
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    </style>
</head>
<body>

    <div class="container d-flex flex-wrap align-content-center" id="outer-container">
        <div class="container rounded-lg text-light p-5 shadow-lg border border-light" style="background-color: rgba(15, 104, 194, 0.7);">
            <h1 class="text-center">Survey</h1>
            <div class="container border border-light p-5 mt-5" id="content">
                <div id="content-inner">
                    <div class="blockquote text-center">
                        <h4 id="paragraph">Please take a few moments of your time to answer this survey and help us improve our web application.</h4>
                        <p id="sub-paragraph"></p>
                    </div>
                    <div id="answer" class="my-5"></div>
                    <button id="button" class="btn btn-success" onclick="one()">Click to begin</button>
                </div>
            </div>
        </div>
    </div>
    <script src="app/app.js"></script>
    <script>
        var outerContainer = document.getElementById('outer-container');
        outerContainer.style.height = window.innerHeight+'px';
        var content = document.getElementById('content');
        var content_inner = document.getElementById('content-inner');
        var paragraph = document.getElementById('paragraph');
        var sub_paragraph = document.getElementById('sub-paragraph');
        var answer_rubric = document.getElementById('answer');
        var button = document.getElementById('button');

        window.onload = function(){
            var x = localStorage.getItem("pageNo");
            if(x === '1'){
                one();
            }
            if(x === '2'){
                two();
            }
            if(x === '3'){
                three();
            }
            if(x === '4'){
                four();
            }
            if(x === '5'){
                five();
            }
            if(x === '6'){
                six();
            }
            if(x === '7'){
                seven();
            }
            if(x === '8'){
                eight();
            }
            if(x === '9'){
                nine();
            }
            if(x === '10'){
                ten();
            }
            if(x === '11'){
                eleven();
            }
            if(x === '12'){
                twelve();
            }
            if(x === '13'){
                thirteen();
            }
            if(x === 'finish'){
                finish();
            }
            if(x === 'end'){
                end();
            }
        }

        
        

        

        
    </script>
</body>
</html>