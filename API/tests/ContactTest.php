<?php

// use PHPUnit\Framework\TestCase;
use App\Controller\Contacts;
use App\Controller;

use PHPUnit\Framework\TestCase;
function createRequest($request)
{
    try                 
    { 
        $bdd = new \PDO('mysql:host=hugoorickx.tech:3306;dbname=u716273791_cogip;charset=utf8', 'u716273791_cogip', '/A9gHHj31M@f');
        $ps= $bdd->prepare($request);
        $ps->execute();
        return $ps->fetchAll(\PDO::FETCH_ASSOC);
    }
    catch(Exception $e) { throw new Exception('Erreur : '.$e->getMessage()); }
}

function json_gen($success, $message)
{
    return json_encode([
        'success'=> $success,
        'message'=> $message
    ]);
}

class ContactTest extends TestCase {
  public function testPostMethod() {
    $contact = new Contacts();
    
    // Test with valid data
    $result = $contact->getAll();
    $this->assertEquals($result, true);
  }
}
