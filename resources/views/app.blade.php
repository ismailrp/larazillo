<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  @vite(['resources/js/app.js', 'resources/css/app.css'])
  @inertiaHead
</head>
<body class="pb-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
  @routes
  @inertia
    
  </body>
</html>