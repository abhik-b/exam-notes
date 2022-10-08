
## Summary

Infrastructure as a Service (IaaS) is a category of Cloud Computing where computing infrastructure is used by customers on a "pay-as-you-go" basis. Often IaaS is considered outsourcing. IaaS is scalable to meet the needs of customers. With IaaS, customers can have all the same computing services as very large firms.

Platform as a Service (PaaS) is a category of Cloud Computing that delivers development environments and tools for developing applications. PaaS delivers a pay-as-you-go suite of tools to firms of any size. The development tools can be the top line products that are very expensive.

Software as a Service (SaaS) is a category to of Cloud Computing where a 3rd party hosts software products, and makes them available to users over the internet. SaaS offers a pay-by-user, and pay-by-month options. These options are much more efficient than the perpetual license model offered by many software vendors.

Function as a Service (FaaS) is a very specialized category of Cloud Computing. FaaS delivers real time functionality to firms, when the functionality is needed. With FaaS, the customer does not pay for idle time. During idle time the processing stops. The processing starts again when the user requests the functionality. Only paying for "up time" is a major difference between FaaS, and IaaS. With IaaS, customer pay for the computing infrastructure with it is active, or inactive.

![types of service models](/assets/images/20220914103824.png)

## IAAS

Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential stuff on a pay-as-you-go basis :

- compute,
- storage,
- networking resources on demand
- servers
  - virtual
  - runtime

It provides a single virtual environment for all developement & test efforts. This environment can be duplicated or copied & used as many times as needed however it will act as a local computer. It offers _virtual_ servers, desktops,security & networking. IAAS makes it possible for smaller firms to have same infrastructure as any large firm.

Common use cases : Developement & testing Environments. Developing & Testing in a environment that emulates production is best scenario for quality.

It requires large investments i.e it is _expensive_ to maintain infrastructure so IAAS makes it easier & less _expensive_.

**Examples** : AWS , AZURE , Google Cloud

Learn More [here](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-iaas/)

![](/assets/images/2022-09-29-14-54-49.png)

## PAAS

Platform as a service (PaaS) or application platform as a service (aPaaS) or platform-based service is a category of cloud computing services that allows customers to provision, instantiate, run, and manage a modular bundle comprising a computing platform and one or more applications, without the complexity of building and maintaining the infrastructure typically associated with developing and launching the application(s); and to allow developers to create, develop, and package such software bundles.

PaaS can be delivered in three ways:

- As a public cloud service from a provider, where the consumer controls software deployment with minimal configuration options, and the provider provides the networks, servers, storage, operating system (OS), middleware (e.g. Java runtime, .NET runtime, integration, etc.), database and other services to host the consumer's application.
- As a private service (software or appliance) behind a firewall.
- As software deployed on public infrastructure as a service.

By delivering infrastructure as a service, PaaS offers the same advantages as IaaS. But its additional features—middleware, development tools, and other business tools—give you more advantages:

- **Cut coding time** - PaaS development tools can cut the time it takes to code new apps with pre-coded application components built into the platform, such as workflow, directory services, security features, search, and so on.
- **Add development capabilities without adding staff** - Platform as a Service components can give your development team new capabilities without your needing to add staff having the required skills.
- **Develop for multiple platforms—including mobile—more easily** - Some service providers give you development options for multiple platforms, such as computers, mobile devices, and browsers making cross-platform apps quicker and easier to develop.
- **Use sophisticated tools affordably** - A pay-as-you-go model makes it possible for individuals or organizations to use sophisticated development software and business intelligence and analytics tools that they could not afford to purchase outright.
- **Support geographically distributed development teams** - Because the development environment is accessed over the Internet, development teams can work together on projects even when team members are in remote locations.
- **Efficiently manage the application lifecycle** - PaaS provides all of the capabilities that you need to support the complete web application lifecycle: building, testing, deploying, managing, and updating within the same integrated environment.

![](/assets/images/29-09-202215_16_29.png)

## SAAS

SAAS is the cloud computing model where a 3rd party hosts applications for the purposes of offering them to customers online. It delivers as enterprise software at a subscription price.

Advantages of SaaS :

- **Gain access to sophisticated applications** - To provide SaaS apps to users, you don’t need to purchase, install, update, or maintain any hardware, middleware, or software. SaaS makes even sophisticated enterprise applications, such as ERP and CRM, affordable for organizations that lack the resources to buy, deploy, and manage the required infrastructure and software themselves.

- **Pay only for what you use** - You also save money because the SaaS service automatically scales up and down according to the level of usage.

- **Use free client software** - Users can run most SaaS apps directly from their web browser without needing to download and install any software, although some apps require plugins. This means that you don’t need to purchase and install special software for your users.

- **Mobilize your workforce easily** - SaaS makes it easy to “mobilize” your workforce because users can access SaaS apps and data from any Internet-connected computer or mobile device. You don’t need to worry about developing apps to run on different types of computers and devices because the service provider has already done so. In addition, you don’t need to bring special expertise onboard to manage the security issues inherent in mobile computing. A carefully chosen service provider will ensure the security of your data, regardless of the type of device consuming it.

- **Access app data from anywhere** - With data stored in the cloud, users can access their information from any Internet-connected computer or mobile device. And when app data is stored in the cloud, no data is lost if a user’s computer or device fails.

**Example** : If you’ve used a web-based email service such as Outlook, Hotmail, or Yahoo! Mail, then you’ve already used a form of SaaS. With these services, you log into your account over the Internet, often from a web browser. The email software is located on the service provider’s network, and your messages are stored there as well. You can access your email and stored messages from a web browser on any computer or Internet-connected device.

The previous examples are free services for personal use. For organizational use, you can rent productivity apps, such as email, collaboration, and calendaring; and sophisticated business applications such as customer relationship management (CRM), enterprise resource planning (ERP), and document management. You pay for the use of these apps by subscription or according to the level of use.

## FAAS

It is like PAAS but more of application dev envirionment as microservices. It provides computing dynamically on demand. It actually provides **processing of data** , it _does not store data_ . This is also known as **serverless computing**

![](/assets/images/2022-09-30-11-27-33.png)
