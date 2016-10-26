<style>
	*{padding: 0;margin: 0;box-sizing:border-box;}
	.group{width: 500px;height: 300px;float: left;margin: 50px;}
	.group.bg{width: 100%;height: 100%;position: fixed;margin: 0;}
	.group.bg .Center-Container{background-color: #000;opacity: 0.3;}
	.Center-Container{background-color: #2E5F3F;height: 100%;width: 100%;}
	.Center-Container {
	  position: relative;
	}

	.wrapper{background-color: #2E5F3F;}
	.Absolute-Center,.is-Negative,.is-Transformed,.content{background-color: #4FA46B;}
	.Absolute-Center {
	  width: 50%;
	  height: 50%;
	  overflow: auto;
	  margin: auto;
	  position: absolute;
	  top: 0; left: 0; bottom: 0; right: 0;
	}

	.Absolute-Center.is-Fixed {
	  position: fixed;
	  z-index: 999;
	}

	.Absolute-Center.is-Responsive {
	  width: 60%; 
	  height: 60%;
	  min-width: 200px;
	  max-width: 400px;
	  padding: 40px;
	}

	.Absolute-Center.is-Overflow {
	  overflow: auto;
	}

	.Absolute-Center.is-Resizable {
	  min-width: 20%;
	  max-width: 80%;
	  min-height: 20%;
	  max-height: 80%;
	  resize: both;
	  overflow: auto;
	}

	.Absolute-Center.is-Image {
	  height: auto;
	}

	.Absolute-Center.is-Image img { 
	  width: 100%;
	  height: auto;
	}

	.is-Negative {
        width: 300px;
        height: 200px;
        padding: 20px;
        position: absolute;
        top: 50%; left: 50%;
        margin-left: -150px; /* (width + padding)/2 */
        margin-top: -100px; /* (height + padding)/2 */
	}

	.is-Transformed { 
	  width: 50%;
	  height: 50%;
	  margin: auto;
	  position: absolute;
	  top: 50%; left: 50%;
	  -webkit-transform: translate(-50%,-50%);
	      -ms-transform: translate(-50%,-50%);
	          transform: translate(-50%,-50%);
	}

	.Center-Container.is-Table { display: table; }  
	.is-Table .Table-Cell {  
	  display: table-cell;  
	  vertical-align: middle;  
	}  
	.is-Table .Center-Block {  
	  width: 50%;  
	  margin: 0 auto;  
	  overflow: hidden;
	}  

	.Center-Container.is-Inline {   
      text-align: center;  
      overflow: auto;  
    }  
      
    .Center-Container.is-Inline:after,  
    .is-Inline .Center-Block {  
      display: inline-block;  
      vertical-align: middle;  
    }  
      
    .Center-Container.is-Inline:after {  
      content: '';  
      height: 100%;  
      margin-left: -0.25em; /* To offset spacing. May vary by font */  
    }  
      
    .is-Inline .Center-Block {  
      max-width: 99%; /* Prevents issues with long content causes the content block to be pushed to the top */  
      /* max-width: calc(100% - 0.25em) /* Only for IE9+ */   
    }  

    /*besides*/
    .wrapper {display:table;} 
    .cell {
        display:table-cell; 
        vertical-align:middle;
    }
</style>
<div class="group">
	<div class="Center-Container">
		<div class="Absolute-Center"></div>
	</div>
</div>
<div class="group bg" style="display: none;">
	<div class="Center-Container">
	</div>
		<div class="Absolute-Center is-Fixed"></div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="Absolute-Center is-Responsive"></div>
	</div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="Absolute-Center is-Overflow">
		<div style="height: 1000px;"></div>
		</div>
	</div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="Absolute-Center is-Resizable">
		<div style="height: 1000px;"></div>
		</div>
	</div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="Absolute-Center is-Image">
		<img src="QQ头像.jpg">
		</div>
	</div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="is-Negative"></div>
	</div>
</div>
<div class="group">
	<div class="Center-Container">
		<div class="is-Transformed"></div>
	</div>
</div>
<div class="group">
	<div class="Center-Container is-Table">
	  <div class="Table-Cell">
	    <div class="Center-Block">
	    <!-- CONTENT --><img src="QQ头像.jpg">	
	    </div>
	  </div>
	</div>
</div>
<div class="group">
	<div class="Center-Container is-Inline">  
	  <div class="Center-Block">  
	    <!-- CONTENT --> <img src="QQ头像.jpg">	
	  </div>  
	</div> 
</div>

<!-- besides -->
<div class="group wrapper">  
    <div class="cell">
        <div class="content"> Content goes here</div>
    </div>
</div>