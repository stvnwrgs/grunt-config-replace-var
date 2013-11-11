<?php

return array(
		'components' => array(
				'db' => array(
						'username' => '${db.user}',
						'password' => '${db.password}',
				),
				'api' => array(
						'password'  =>'${api.password}',
						'secret'    =>'${api.secret}',
				),
				'mail' => array(
						'transportOptions' => array(
								'username'=>'${mail.username}',
								'password'=>'${mail.password}',
						)
				)
		)
);