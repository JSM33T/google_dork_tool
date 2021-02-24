      
		function execcustom() {
									if ($('#filename').val() != '') execFilenamecustom();
							  }
        function execFilenamecustom() 
					{
						var filename = encodeURIComponent($('#filename').val());
						var act = encodeURIComponent($('#act').val());
						var ext2 = encodeURIComponent($('#ext2').val());
						var newUrl = 'https://www.google.com/search?q=-inurl%3Ahtm+-inurl%3Ahtml+intitle%3A"index+of"+' + filename + " (" + act +" " + ext2 + ") -html -htm -php -asp -jsp"+ '&oq=-inurl%3Ahtm+-inurl%3Ahtml+intitle%3A"index+of"+' + filename ;
					
						window.open(newUrl); 
					}
 
              document.getElementById("filename").addEventListener("keydown", function(e)
              {
                  if (!e) { var e = window.event; }
         
                  
                  if (e.keyCode == 13)
                  {
                      execFilename();
                  }
              }, false);    

