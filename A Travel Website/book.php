<?php

    $conn = mysqli_connect('localhost','root','','booking');

    if(isset($_POST['send'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $dest = $_POST['dest'];
        $guests = $_POST['guests'];
        $arrivals = $_POST['arrivals'];
        $leaving = $_POST['leaving'];

        $query = "insert into tourists(name,email,phone,address,dest, guests,arrival,leaving)
        values('$name','$email','$phone','$address', '$dest', '$guests','$arrivals', '$leaving')";
        mysqli_query($conn,$query);

        "<script>
            alert('Booked');
        </script>";
        header('location:book.html');
    } else {
        echo("Something is wrong.");
    }
    $conn.close();
?>